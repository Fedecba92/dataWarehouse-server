const { response } = require("express"); //opcional
const axios = require('axios');
const regions = require("../models/regions");
const countries = require("../models/countries");
const cities = require("../models/cities");

//TODO: crear un getRegions [Africa, Oceanía, Americas, Asia]
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

const createCountry = async (req, res = response)=> {
    try {
        const { name, regionId } = req.body;
        const newCountry = await countries.create({
            name,
            regionId
        });

        return res.status(200).json({
            ok:true,
            newCountry
        });


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

            return res.status(200).json({
                ok: true,
                data: countriesInDB
            });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}

const getCountriesByRegion = async (req, res = response) => {

    try {
        const { regionId } = req.params;
        const countriesInRegion = await countries.findAll({
            where:{
                regionId
            }
        });
        return res.status(200).json({
            ok:true,
            data: countriesInRegion
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}

const createCity = async (req, res=response) => {

    try {
        const {name, countryId} = req.body;
        const newCity = await cities.create({
            name,
            countryId
                   });
        return res.status(200).json({ok: true, newCity});

    } catch (error) {

        return res.status(500).json({ok: false, error});
        
    }
}

const getCities = async (req, res=response) => {
    try {
        const citiesInDB  = await cities.findAll();
        return res.status(200).json({ok:true, data: citiesInDB});
    } catch (error) {
        return res.status(500).json({ok:false, error});
    }
}


module.exports = {
    createRegion,
    getCountries,
    getRegions,
    createCountry,
    createCity,
    getCities,
    getCountriesByRegion
};
  