(ns sctools.dev
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [helix.core :as hx :refer [defnc $]]
            [helix.dom :as d]))

(defnc dev-view [props]
  (hx/<>
    (d/div {:class '[sticky bg-blue-300 border rounded]
            :style {:min-height "100px"}}
      "This is header")
    (d/div {:class '[w-full h-full border-red-500 border overflow-scroll
                     flex flex-col
                     ]}
      (mapv
       (fn [i]
         (let [sticky (zero? (rem i 10))
               ;; sticky (#{10 } i)
               ]
           (d/div {:key i
                   :class (when sticky "sticky bg-red-300 top-0")
                   ;; :class (when sticky
                   ;;          (if (> i 50)
                   ;;            "sticky bottom-0 bg-red-300"
                   ;;            "sticky top-0 bg-red-300"))
                   ;; :style (when sticky {:top "30px"})
                   :id (str "e" i)
                   ;; :style {:z-index (- 100 i)}
                   }
             (str "hello " i (when sticky ", sticky")))))
       (range 30)))))
