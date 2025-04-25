import db from "../db/db.js";
import {BasicInfo, TBasicInfo} from "../models/schema.js"

export const addBasicInfo = async (basicInfo: TBasicInfo)=>{
    await db.insert(BasicInfo).values(basicInfo)
}