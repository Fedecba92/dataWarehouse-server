const { response } = require("express"); //opcional
const axios = require('axios');
const regions = require("../models/regions");
const countries = require("../models/countries");

//TODO: crear un getRegions   [Africa, Oceanía, Americas, Asia]
//TODO: crear un getCities 
//TODO: crear paises: regionId

const createRegion = async ( req, res = response ) =>{

    try {

        const { name } = req.body;
        const newRegion = await regions.create({
            name
        });
        
        return res.status(200).json({
            ok:true,
            newRegion
        });
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
}


const getRegions = async (req, res=response) => {

    const arrayRegions = [{name:'asia'}, {name:'americas'}, {name:'africa'}, {name:'oceania'},{name:'europe'}];

    try {

        const regionsInDB = await regions.findAll();

        if( regionsInDB.length ){
            return res.status(200).json({
                ok:true,
                data: regionsInDB
            })
        }else{
            arrayRegions.forEach( async (reg) => {
                await regions.create({
                    name: reg.name
                })
            });
            return res.status(200).json({
                ok:true,
                data: arrayRegions
            })
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}

const getCountries = async (req, res = response) => {

    try {
        const countriesInDB = await countries.findAll();

        if( countriesInDB.length ){
            
            return res.status(200).json({
                ok: true,
                data:countriesInDB
            });

        }else{
            const url = 'https://restcountries.com/v2/all?fields=name,capital,alpha2Code,callingCodes,subregion,region'; //colocar url de la api REST COUNTRIES https://restcountries.com
            const results = await axios.get(url);
            const { data } = results;
            await data.forEach( async (country) => {
                // const currentRegion = await regions.findOne({
                //     where:{
                //         name: country.region.toLowerCase(), 
                //     }
                // })
                //TODO: Usar la doc de sequalize para establecer la relación con la tabla de regiones
                //TODO: añadir los campos de name, subregion, alphacode2, capital, callingcoudes
                const newCountry = await countries.create({
                    ...country,
                })

            });

            return res.status(200).json({
                ok: true,
                data,
            });

        }

       

        //TODO: crear los otros modelos: regiones, países y ciudades
        

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
    




}



module.exports = {
    createRegion,
    getCountries,
    getRegions,
};
  