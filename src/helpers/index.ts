import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "dd/MM/yyyy");
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "dd/MM/yyyy HH:mm:ss");
}

export function getProductStatusLabel(status: string) {
  switch (status) {
    case "IN_STOCK":
      return "Em estoque";
    case "LOW_STOCK":
      return "Estoque baixo";
    case "OUT_OF_STOCK":
      return "Fora de estoque";
    default:
      return "Status desconhecido";
  }
}
