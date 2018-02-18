# SimpleInventoryApi.AdminsApi

All URIs are relative to *https://virtserver.swaggerhub.com/Ryffine/paas/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventory**](AdminsApi.md#addInventory) | **POST** /inventory | adds an inventory item


<a name="addInventory"></a>
# **addInventory**
> addInventory(opts)

adds an inventory item

Adds an item to the system

### Example
```javascript
import SimpleInventoryApi from 'simple_inventory_api';

let apiInstance = new SimpleInventoryApi.AdminsApi();

let opts = { 
  'inventoryItem': new SimpleInventoryApi.InventoryItem() // InventoryItem | Inventory item to add
};

apiInstance.addInventory(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryItem** | [**InventoryItem**](InventoryItem.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

