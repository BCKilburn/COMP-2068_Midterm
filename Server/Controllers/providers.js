let Provider = require('../Models/provider');

let index = async (req, res, next) => {
    // fetch all Provider docs 
    let provider = await Provider.find();

    console.log(Provider);
    res.render('providers/index', { 
        title: 'Provider Library',
        provider: provider
    });
};

let displayCreateForm = (req, res, next) => {
    res.render('providers/create', { title: 'Add New Provider' });
};

let createProvider = async (req, res, next) => {
    await Provider.create(req.body);
    res.redirect('/providers/index');
};


let displayEditForm = async (req, res, next) => {
    let provider = await Provider.findById(req.params._id);

    res.render('providers/edit', { 
        title: 'Update Provider',
        provider: provider
    });
};

let updateProvider = async (req, res, next) => {
    await Provider.findByIdAndUpdate(req.params._id, req.body);
    res.redirect('/providers/index');
};

// make public
module.exports = {
    index, displayCreateForm, createProvider, displayEditForm,
    updateProvider
};