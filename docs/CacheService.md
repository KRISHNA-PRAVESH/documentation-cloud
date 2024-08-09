---
sidebar_position: 9
sidebar_label : Caching
---
# ICacheService

Namespace: [CacheService.Abstractions](CacheService.Abstractions.md)  
Assembly: CacheService.dll  

```csharp
public interface ICacheService
```
The following line registers `Redis` cache as a CacheService in the application.

```
builder.Services.UseRedisCache();
```

## Methods

### <a id="CacheService_Abstractions_ICacheService_Flush"></a> Flush\(\)

Deletes all keys from the Cache. 

```csharp
void Flush()
```
#### Example

```
CloudManager.Services.CacheService.Flush();
```
 :::warning
This operation cannot undone.
:::

### <a id="CacheService_Abstractions_ICacheService_GetCache__1_System_String_"></a> GetCache<T\>\(string\)

Returns the value of the given Key.The item is returned as the type specified by the generic type parameter `T`

```csharp
T GetCache<T>(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

#### Example

```
User data = Services.CacheService.GetCache<User>("E14"); //returns the data of User with key E14.
```

### <a id="CacheService_Abstractions_ICacheService_GetCache_System_String_System_Type_"></a> GetCache\(string, Type\)

Returns the value of the given key in the specified type.

```csharp
object GetCache(string key, Type type)
```
:::tip
This method can be used when the `Type` is not known at compile time.
:::

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Example

```
var data = Services.CacheService.GetCache("E14", Type.GetType("User"));
```


### <a id="CacheService_Abstractions_ICacheService_SetCache__1_System_String___0_System_TimeSpan_"></a> SetCache<T\>\(string, T, TimeSpan\)

Set key to hold the specified value. If key already holds a value, it is overwritten, regardless of its type.<br>


```csharp
bool SetCache<T>(string key, T value, TimeSpan expiryTime = default)
```
:::info
The Time To Live of the key will be assigned with the specified expiry time, if not specified then by default, keys are set to live forever.
:::

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` T

`expiryTime` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Example

```
User user = new User("E15","John","IT");
bool result = Services.CacheService.SetCache("E15",user);
Services.CacheService.SetCache("copy-E15",user,TimeSpan.FromMinutes(15)); //This key will be expired in 15 minutes.
```
