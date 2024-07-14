import { Initialize as InitializeEvent } from "../generated/Launcher/Launcher";
import { addEventCollectionNumberPoolsV4 } from "./utils/entities/eventCollection";
import { createInitializeEvent } from "./utils/entities/initializeEvent";

export function handleInitialize(event: InitializeEvent): void {
  createInitializeEvent(event);
  addEventCollectionNumberPoolsV4();
}
