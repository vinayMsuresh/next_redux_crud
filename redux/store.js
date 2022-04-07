import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
export const saga = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(saga));