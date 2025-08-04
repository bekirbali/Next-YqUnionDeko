"use client";
import { useTranslation as useReactI18next } from "react-i18next";

export function useTranslation(namespace = "common") {
  return useReactI18next(namespace);
}

export default useTranslation;
