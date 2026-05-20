#!/usr/bin/env node
import { UiDeskApp } from "./ui/app.js";

const app = new UiDeskApp();

process.on("uncaughtException", (error) => {
  process.stdout.write(`\nUI Desk crashed safely: ${error.stack || error.message}\n`);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  process.stdout.write(`\nUI Desk async error: ${error.stack || error.message}\n`);
});

app.start();
