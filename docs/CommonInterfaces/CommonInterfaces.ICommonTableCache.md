#  Interface ICommonTableCache

Namespace: [CommonInterfaces](CommonInterfaces.md)  
Assembly: CommonInterfaces.dll  

```csharp
public interface ICommonTableCache
```

## Methods

###  BulkDelete<T\>\(List<T\>\)

```csharp
bool BulkDelete<T>(List<T> deletedItems) where T : class, ITableCache
```

#### Parameters

`deletedItems` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  BulkDeleteAndUpdate<T\>\(string, List<T\>\)

```csharp
bool BulkDeleteAndUpdate<T>(string prefix, List<T> toUpdate) where T : class, ITableCache
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`toUpdate` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  BulkUpdate<T\>\(IEnumerable<T\>, bool\)

```csharp
bool BulkUpdate<T>(IEnumerable<T> Items, bool persist = false) where T : class, ITableCache
```

#### Parameters

`Items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  ClearType<T\>\(\)

```csharp
bool ClearType<T>() where T : class, ITableCache
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  Delete<T\>\(string, bool\)

```csharp
T Delete<T>(string id, bool cacheOnly = false) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`cacheOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 T

#### Type Parameters

`T` 

###  Get<T\>\(string\)

```csharp
T Get<T>(string id) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  Get<T\>\(\)

```csharp
IEnumerable<T> Get<T>() where T : class, ITableCache
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

###  GetAll<T\>\(\)

```csharp
List<T> GetAll<T>() where T : class, ITableCache
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetByTenant<T\>\(int\)

```csharp
List<T> GetByTenant<T>(int tenantId) where T : class, ITableCache
```

#### Parameters

`tenantId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetMatching<T\>\(string\)

```csharp
List<T> GetMatching<T>(string key) where T : class, ITableCache
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  HasItem<T\>\(string\)

```csharp
bool HasItem<T>(string id) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  HasType\(Type\)

```csharp
bool HasType(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Initialize<T\>\(\)

```csharp
void Initialize<T>() where T : class, ITableCache
```

#### Type Parameters

`T` 

###  InitializeForType\(Type\)

```csharp
void InitializeForType(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

###  InitializeOnly<T\>\(ICriterion\)

```csharp
void InitializeOnly<T>(ICriterion Criteria) where T : class, ITableCache
```

#### Parameters

`Criteria` ICriterion

#### Type Parameters

`T` 

###  KeepReference<T\>\(\)

```csharp
void KeepReference<T>() where T : class, ITableCache
```

#### Type Parameters

`T` 

###  NotifyCallback<T\>\(T, bool\)

```csharp
bool NotifyCallback<T>(T data, bool toDelete = false) where T : class, ITableCache
```

#### Parameters

`data` T

`toDelete` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  Put<T\>\(T, bool\)

```csharp
bool Put<T>(T data, bool persist = true) where T : class, ITableCache
```

#### Parameters

`data` T

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  PutForType\(Type, object, bool\)

```csharp
bool PutForType(Type type, object data, bool persist = true)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  RegisterCallback<T\>\(Func<object, bool, T\>\)

```csharp
bool RegisterCallback<T>(Func<object, bool, T> function) where T : class, ITableCache
```

#### Parameters

`function` [Func](https://learn.microsoft.com/dotnet/api/system.func\-3)<[object](https://learn.microsoft.com/dotnet/api/system.object), [bool](https://learn.microsoft.com/dotnet/api/system.boolean), T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  clearCache<T\>\(\)

```csharp
bool clearCache<T>() where T : class, ITableCache
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

