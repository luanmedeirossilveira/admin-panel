import { Router } from "express";
import {
  getAttributes,
  getValuesAttributes,
} from "../controllers/attributeController";

const router = Router();

router.get("/attributes", getAttributes);

router.get("/attributes/:id", getValuesAttributes);

export default router;
