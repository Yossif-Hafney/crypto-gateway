import { Settings } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Handshake } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Bell } from 'lucide-react';


export function OverviewIcon() {
  return <ChartNoAxesCombined />;
}
export function MerchantsIcon() {
  return <Handshake />;
}
export function TransactionsIcon() {
  return <ArrowLeftRight />;
}
export function SettingsIcon() {
  return <Settings />;
}
export function NotificationsIcon() {
  return <Bell />;
}
