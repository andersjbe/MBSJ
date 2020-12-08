import { Router } from "express";
import asyncHandler from "express-async-handler";

import {Report, IReport} from "./db/models/report";

const router: Router = Router();

router.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
    const {salary, company, role, title, yoe, note,
        location: {city, state, country},
        demographics: {race, age, gender, sexualOrientation, transNonbinary, disability}} = req.body;

    const report: IReport = await Report.create({salary, company, role, title, yoe, note,
        location: {city, state, country},
        demographics: {race, age, gender, sexualOrientation, transNonbinary, disability}});

    res.json(report);
}));

export default router;
