(ns sctools.app.core
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [sctools.utils.rf-utils
             :as rfu
             :refer [db-sub quick-sub]]))

(def app-path [(rf/path :app)])

(db-sub :app)
(quick-sub :app/booted)

(def default-db
  {:app {:booted false}})

(rf/reg-event-db
 :app/booted
 app-path
 (fn [app]
   (assoc app :booted true)))

(defn boot-flow
  []
  {:first-dispatch [:init/load-api-key]
   :rules [
     {:when :seen? :events :init/loaded
      :dispatch [:app/booted]
      :halt? true}]})

(rf/reg-event-fx
  :app/boot
  (fn []
    {:db default-db
     :async-flow (boot-flow)}))
