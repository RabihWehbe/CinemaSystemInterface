import { Injectable } from "@angular/core";
import { Cast } from "../Models/Cast";



@Injectable()
export class CelebBindService{
    cast : Cast = new Cast();
}