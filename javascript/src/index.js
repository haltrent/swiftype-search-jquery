/**
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import InventoryItem from './model/InventoryItem';
import Manufacturer from './model/Manufacturer';
import AdminsApi from './api/AdminsApi';
import DevelopersApi from './api/DevelopersApi';


/**
* This_is_a_simple_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SimpleInventoryApi = require('index'); // See note below*.
* var xxxSvc = new SimpleInventoryApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SimpleInventoryApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SimpleInventoryApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SimpleInventoryApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InventoryItem model constructor.
     * @property {module:model/InventoryItem}
     */
    InventoryItem,

    /**
     * The Manufacturer model constructor.
     * @property {module:model/Manufacturer}
     */
    Manufacturer,

    /**
    * The AdminsApi service constructor.
    * @property {module:api/AdminsApi}
    */
    AdminsApi,

    /**
    * The DevelopersApi service constructor.
    * @property {module:api/DevelopersApi}
    */
    DevelopersApi
};
