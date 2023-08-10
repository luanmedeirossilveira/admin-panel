import { Request, Response } from "express";
import Attribute from "../db/models/AttributesModel";

const getAttributes = async (req: Request, res: Response) => {
  try {
    const attributes = await Attribute.findAll();
    res.json(attributes);
  } catch (error) {
    console.error('Error fetching attributes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getValuesAttributes = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const attributes = await Attribute.findAll({ where: { id } });
    res.json(attributes);
  } catch (error) {
    console.error('Error fetching attributes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export { getAttributes, getValuesAttributes }; 