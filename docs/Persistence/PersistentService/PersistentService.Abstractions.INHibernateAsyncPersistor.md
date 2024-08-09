#  Interface INHibernateAsyncPersistor

Namespace: [PersistentService.Abstractions](PersistentService.Abstractions.md)  
Assembly: PersistentService.dll  

common persistence layer for cloud and on premise product - asynchronous

```csharp
public interface INHibernateAsyncPersistor
```

## Methods

###  BulkDelete<T\>\(List<T\>\)

the BulkDelete method is used for bulk data deletion and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the bulk deletion operation. The type of data to be deleted is specified as a parameter.

```csharp
Task<bool> BulkDelete<T>(List<T> obj)
```

#### Parameters

`obj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

###  BulkDeleteDataWithMatchedCriteria<T\>\(ICriterion\)

the BulkDelete method is used for bulk data deletion with specific criteria and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the bulk deletion operation. The type of data to be deleted is specified as a parameter.

```csharp
Task<bool> BulkDeleteDataWithMatchedCriteria<T>(ICriterion criterion) where T : class
```

#### Parameters

`criterion` ICriterion

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

###  BulkDeleteDataWithMatchedCriteria\(ICriterion, Type\)

the BulkDelete method is used for bulk data deletion with specific criteria and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the bulk deletion operation. The type of data to be deleted is specified as a parameter.

```csharp
Task<bool> BulkDeleteDataWithMatchedCriteria(ICriterion criterion, Type type)
```

#### Parameters

`criterion` ICriterion

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

###  BulkInsert<T\>\(List<T\>\)

used to insert list of object if not found already in database

```csharp
Task<bool> BulkInsert<T>(List<T> obj) where T : class
```

#### Parameters

`obj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

###  BulkInsertOrUpdate<T\>\(List<T\>\)

The BulkInsertOrUpdate method is designed for bulk data operations, allowing for the insertion or updating of a list of data objects. It returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the bulk operation.

```csharp
Task<bool> BulkInsertOrUpdate<T>(List<T> data)
```

#### Parameters

`data` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

###  Delete<T\>\(T\)

Delete method is used to delete data and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the deletion operation

```csharp
Task<bool> Delete<T>(T obj)
```

#### Parameters

`obj` T

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

###  FetchDataBaseItems\(Type\)

The FetchDataBaseItems method is designed to retrieve data items of a specified type from a database and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<object>> FetchDataBaseItems(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>\>

###  FetchDataBaseItems<T\>\(\)

The FetchDataBaseItems method is designed to retrieve data items of a specified type from a database and returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<T>> FetchDataBaseItems<T>() where T : class
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>\>

#### Type Parameters

`T` 

###  FetchDataWithCriteria<ExpectedReturnType\>\(Type, ICriterion\)

The FetchDataWithCriteria method is used to retrieve data of a specified type T from a data source based on specific criteria provided through the ICriterion parameter. It returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<ExpectedReturnType>> FetchDataWithCriteria<ExpectedReturnType>(Type type, ICriterion criterion)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`criterion` ICriterion

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>\>

#### Type Parameters

`ExpectedReturnType` 

###  FetchDataWithCriteria<T\>\(ICriterion\)

The FetchDataWithCriteria method is used to retrieve data of a specified type T from a data source based on specific criteria provided through the ICriterion parameter. It returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<T>> FetchDataWithCriteria<T>(ICriterion criterion)
```

#### Parameters

`criterion` ICriterion

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>\>

#### Type Parameters

`T` 

###  FetchDataWithDetachedCriteria<ExpectedReturnType\>\(DetachedCriteria\)

used to fetch data with detached criteria instance

```csharp
Task<List<ExpectedReturnType>> FetchDataWithDetachedCriteria<ExpectedReturnType>(DetachedCriteria detachedCriteria)
```

#### Parameters

`detachedCriteria` DetachedCriteria

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>\>

#### Type Parameters

`ExpectedReturnType` 

###  FetchDataWithProjections<T, ExpectedReturnType\>\(IProjection\)

The FetchDataWithProjections method is used to retrieve data of a specified type T with specific projections or transformations applied based on the IProjection parameter. It returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<ExpectedReturnType>> FetchDataWithProjections<T, ExpectedReturnType>(IProjection projection)
```

#### Parameters

`projection` IProjection

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>\>

#### Type Parameters

`T` 

`ExpectedReturnType` 

###  FetchDataWithProjections<ExpectedReturnType\>\(Type, IProjection\)

The FetchDataWithProjections method is used to retrieve data of a specified type T with specific projections or transformations applied based on the IProjection parameter. It returns a structured result that can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the data retrieval operation.

```csharp
Task<List<ExpectedReturnType>> FetchDataWithProjections<ExpectedReturnType>(Type type, IProjection projection)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`projection` IProjection

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>\>

#### Type Parameters

`ExpectedReturnType` 

###  GetRowCount\(DetachedCriteria\)

use to get the rows count of the table with applied criteria

```csharp
Task<int> GetRowCount(DetachedCriteria detachedCriteria)
```

#### Parameters

`detachedCriteria` DetachedCriteria

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

###  GetSession\(\)

used to fetch the persistor session

```csharp
ISession GetSession()
```

#### Returns

 ISession

###  GetSessionFactory\(\)

used to fetch the session factory instance

```csharp
ISessionFactory GetSessionFactory()
```

#### Returns

 ISessionFactory

###  InjectSessionFactoryInstanceInvoker\(Func<ISessionFactory\>\)

used to register the session factory instance invoker

```csharp
void InjectSessionFactoryInstanceInvoker(Func<ISessionFactory> sessionFactoryInvoker)
```

#### Parameters

`sessionFactoryInvoker` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<ISessionFactory\>

###  InsertOrUpdate<T\>\(T\)

The InsertOrUpdate method is designed to handle data insertion or update operations within the context of a registered tenant. It is a generic method that can work with various data types. Additionally, it provides an option to specify whether the data type should be transformed into a server-specific type. The method returns a structured result, which can include success responses or specific error types such as UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError, depending on the outcome of the operation.

```csharp
Task<bool> InsertOrUpdate<T>(T obj) where T : class
```

#### Parameters

`obj` T

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Type Parameters

`T` 

