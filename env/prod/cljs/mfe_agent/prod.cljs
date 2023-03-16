(ns mfe-agent.prod
  (:require [mfe-agent.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
