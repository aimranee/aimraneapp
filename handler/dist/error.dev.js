"use strict";

// --- SET UP
var _require = require('../util/error'),
    newError = _require.newError;

function pageNotFound(req, res, next) {
  try {
    return res.status(200).render('./util/page/404', {
      title: 'Page non trouvée'
    });
  } catch (error) {
    return next(newError(500, "quelque chose s'est mal passé"));
  }
} // throw the error 


function throwError(err, req, res, next) {
  try {
    if (err.code === 400) {
      req.flash('err', err.error);
      return res.redirect(req.originalUrl);
    }

    if (err.code === 401) {
      req.flash('err', err.error);
      return res.redirect(req.baseUrl);
    }

    return res.status(200).render('./util/page/error', {
      title: 'error',
      err: err
    });
  } catch (error) {
    return res.status(200).render('./util/page/error', {
      title: 'error',
      err: err
    });
  }
}

module.exports = {
  pageNotFound: pageNotFound,
  throwError: throwError
};