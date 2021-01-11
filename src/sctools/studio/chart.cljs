(ns sctools.studio.chart
  (:require ["@material-ui/core/Button" :default Button]
            ["@material-ui/core/Checkbox" :default Checkbox]
            ["@material-ui/core/Dialog" :default Dialog]
            ["@material-ui/core/FormControlLabel" :default FormControlLabel]
            ["@material-ui/core/FormGroup" :default FormGroup]
            ["@material-ui/core/LinearProgress" :default LinearProgress]
            ["@material-ui/core/Link" :default Link]
            ["@material-ui/core/Paper" :default Paper]
            ["@material-ui/core/Tab" :default Tab]
            ["@material-ui/core/Table" :default Table]
            ["@material-ui/core/TableBody" :default TableBody]
            ["@material-ui/core/TableCell" :default TableCell]
            ["@material-ui/core/TableHead" :default TableHead]
            ["@material-ui/core/TableRow" :default TableRow]
            ["@material-ui/core/Tabs" :default Tabs]
            ["@material-ui/core/TextField" :default TextField]
            ["@material-ui/core/Typography" :default Typography]
            ["@material-ui/lab/Alert" :default Alert]
            ["@material-ui/lab/Autocomplete" :default Autocomplete]
            ["react-vega" :refer [VegaLite]]
            ["react-router-dom"
             :refer
             [Route Switch useParams useRouteMatch]]
            [applied-science.js-interop :as j]
            [bb.clojure :refer [cond*]]
            [clojure.string :as str]
            [helix.core :as hx :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks :refer [use-ref use-effect use-memo use-state]]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [sctools.app.layout :as layout]
            sctools.studio.events
            sctools.studio.machine
            sctools.studio.subs
            [sctools.studio.utils
             :refer
             [get-job-number get-spider info-keys info-titles is-job-valid?]]
            [sctools.utils.rf-utils :as rfu :refer [use-atom]]
            [sctools.widgets.common :refer [error-msg tooltip popover]]
            [statecharts.core :as fsm]))

(defn create-vega-spec []
  (j/lit
   {:data {:name :jobdata}
    :mark :line
    :width 800
    :height 600
    :encoding {:x {:field :job
                   :type :ordinal
                   :title "Job"
                   :axis {:labelAngle 45
                          :titleFontSize 14
                          :titlePadding 20}}
               :y {:field :data
                   :title "Items"
                   :scale {:zero false}
                   :axis {:titleFontSize 14
                          :titleAngle 0
                          :titlePadding 20
                          :format "~s"}
                   :type :quantitative}}}))

(defnc job-chart-view-impl [{:keys [chart-data]}]
  (d/div {:class '[flex flex-col w-full h-full]}
    (d/div {:class '[mt-8 flex flex-col items-center justify-center]}
      #_(for [{:keys [job data]} chart-data]
        (d/div {:key job
                :class '[flex flex-row]}
          (d/div job)
          (d/div data)))
      (let [spec (create-vega-spec)
            data (j/lit {:jobdata (clj->js chart-data)})]
        ($ VegaLite {:spec spec :data data})
        #_(d/div {:class '[chart-container]
                :ref container-el})))))

(defn job-chart-view []
  (let [chart-data @(rf/subscribe [:studio/chart.col-data])]
    "Hello chart2!"
    ($ job-chart-view-impl {:chart-data chart-data})))
