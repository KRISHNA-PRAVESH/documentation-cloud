---
sidebar_position: 5
sidebar_label : Persistor
---
# INHibernatePersistor

Namespace: [PersistentService.Abstractions](PersistentService.Abstractions.md)  
Assembly: PersistentService.dll  

Common persistence layer for cloud and on premise product.

```csharp
public interface INHibernatePersistor
```
The following line registers `NHibernate` as a Database service in the application.

```
builder.Services.AddCloudPersistenceLayer();   
```
**Pre-requisite:** [Scope](CloudCore/CloudCore.Scope.md)
## Methods


### <a id="PersistentService_Abstractions_INHibernatePersistor_GetSessionFactory"></a> GetSessionFactory\(\)

Returns the `SessionFactory` object either for **AppScope** or **TenantScope** based on the currently applied scope.<br>


```csharp
ISessionFactory GetSessionFactory()
```

#### Returns

 ISessionFactory

 :::info

The session factory of `AppScope` contains mappers of `IApp` models and `external` database connection.<br>
The session factory of `TenantScope` contains mappers of `ITenant` models and `datacenter` database connection.

:::

#### Example

```
//getting session factory with App scope.
 using(new TenantDelegationContext(Scope.GetAppScope()))
 {
     var sessionFactory = CloudManager.Services.Persistor.GetSessionFactory();
 }

//getting session factory with Tenant scope.
 using(new TenantDelegationContext(Scope.GetTenantScope(tenant, globalTenantId, userId, userPrincipalName)))
 {
     var sessionFactory = CloudManager.Services.Persistor.GetSessionFactory();
 }
```



### <a id="PersistentService_Abstractions_INHibernatePersistor_GetSession"></a> GetSession\(\)

Returns an `ISession` from App or Tenant session factory based on specified scope(or currently applied scope).

```csharp
ISession GetSession() 
```

#### Returns

 ISession

 #### Example

 ```
 //scope is applied from current session.
 using(new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
 {
     var session = Services.Persistor.GetSession();  
 }
 ```

 :::tip
 
 Inorder for the session factory to include the mappings for the persistent models in the application, implement the interface `IApp` for app related models and `ITenant` for tenant related models and same for the corresponding mapper classes.

 **Example**:
 ```
 //for app related models
 public class UserInfo : IApp {}
 public class UserInfoMap : ClassMapping<UserInfo>, IApp {}

 //for tenant related models
 public class Blog : ITenant {}
 public class BlogMap : ClassMapping<Blog>, ITenant {}
 ```

:::

### <a id="PersistentService_Abstractions_INHibernatePersistor_Insert__1___0_"></a> Insert<T\>\(T\)

Inserts the given object of type `T` into the database.

```csharp
bool Insert<T>(T obj) where T : class
```

#### Parameters

`obj` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Example
```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    bool isInserted = Services.Persistor.Insert(new User("E14","John","IT"));
}
```
 :::info
The database (**App** or **Tenant**) is chosen based on the currently applied scope.
:::

### <a id="PersistentService_Abstractions_INHibernatePersistor_InsertOrUpdate__1___0_"></a> InsertOrUpdate<T\>\(T\)

Used to either **Save** or **Update** the given instance, depending upon the value of its identifier property.

```csharp
bool InsertOrUpdate<T>(T obj) where T : class
```

#### Parameters

`obj` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Example

```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    bool isInserted = Services.Persistor.InsertOrUpdate(new User("E14","John","IT"));
}
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_BulkInsertOrUpdate__1_System_Collections_Generic_List___0__"></a> BulkInsertOrUpdate<T\>\(List<T\>\)

The BulkInsertOrUpdate method is designed for bulk data operations, allowing for the insertion or updating of a list of data objects.

```csharp
bool BulkInsertOrUpdate<T>(List<T> data)
```

#### Parameters

`data` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="PersistentService_Abstractions_INHibernatePersistor_Delete__1___0_"></a> Delete<T\>\(T\)

Used to remove a persistent instance from the datastore.

```csharp
bool Delete<T>(T obj)
```

#### Parameters

`obj` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Example
```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    bool isDeleted = Services.Persistor.Delete(user);
}
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_BulkDelete__1_System_Collections_Generic_List___0__"></a> BulkDelete<T\>\(List<T\>\)

Used for bulk data deletion. This function accepts a list of objects that needs to be deleted.
```csharp
bool BulkDelete<T>(List<T> obj)
```

#### Parameters

`obj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="PersistentService_Abstractions_INHibernatePersistor_BulkDeleteDataWithMatchedCriteria__1_NHibernate_Criterion_ICriterion_"></a> BulkDeleteDataWithMatchedCriteria<T\>\(ICriterion\)

Used for bulk data deletion with specific criteria.

```csharp
bool BulkDeleteDataWithMatchedCriteria<T>(ICriterion criterion) where T : class
```

#### Parameters

`criterion` ICriterion

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Example
```
 using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
 {
     var deleteCriteria = Restrictions.Ge(nameof(UserInfo.id), "6");
     bool isDeleted = Services.Persistor.BulkDeleteDataWithMatchedCriteria<UserInfo>(deleteCriteria);
 }
 //The above code deletes all the entries from UserInfo having id greater than or equal to 6.
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_BulkDeleteDataWithMatchedCriteria_NHibernate_Criterion_ICriterion_System_Type_"></a> BulkDeleteDataWithMatchedCriteria\(ICriterion, Type\)

the BulkDelete method is used for bulk data deletion with specific criteria.

```csharp
bool BulkDeleteDataWithMatchedCriteria(ICriterion criterion, Type type)
```

#### Parameters

`criterion` ICriterion

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

 #### Example

 ```
 using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    var deleteCriteria = Restrictions.Ge("id", "6");
    bool isDeleted = Services.Persistor.BulkDeleteDataWithMatchedCriteria(deleteCriteria,Type.GetType("UserInfo"));
}
 ```

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataBaseItems__1_NHibernate_Criterion_ICriterion_System_Collections_Generic_List_NHibernate_Criterion_Order__System_Int32_"></a> FetchDataBaseItems<T\>\(ICriterion, List<Order\>, int\)

The FetchDataBaseItems method is designed to retrieve data items of a specified type from a database.

```csharp
IEnumerable<T> FetchDataBaseItems<T>(ICriterion criteria = null, List<Order> sortOption = null, int pageSize = 1000) where T : class
```

#### Parameters

`criteria` ICriterion

`sortOption` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Order\>

`pageSize` [int](https://learn.microsoft.com/dotnet/api/system.int32) - Limit for number of objects to be retrieved from the Database.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 
 #### Example

 ```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
 {
     List<Order> order = new List<Order>
     {
        Order.Asc(nameof(UserInfo.Name))
     };
     var filter = Restrictions.Eq(nameof(UserInfo.Department), "Marketing");
     var data = Services.Persistor.FetchDataBaseItems<UserInfo>(filter,order).ToList();
 }
 //The above code retrieves all users from the UserInfo table who belong to the Marketing department, ordered by their names in ascending order.
 ```

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataBaseItems_System_Type_NHibernate_Criterion_ICriterion_System_Collections_Generic_List_NHibernate_Criterion_Order__System_Int32_"></a> FetchDataBaseItems\(Type, ICriterion, List<Order\>, int\)

The FetchDataBaseItems method is designed to retrieve data items of a specified type from a database.

```csharp
IEnumerable<object> FetchDataBaseItems(Type type, ICriterion criteria = null, List<Order> sortOption = null, int pageSize = 1000)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`criteria` ICriterion 

`sortOption` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Order\>

`pageSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)  - Limit for number of objects to be retrieved from the Database.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>



### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataWithCriteria__1_System_Type_NHibernate_Criterion_ICriterion_"></a> FetchDataWithCriteria<ExpectedReturnType\>\(Type, ICriterion\)

The FetchDataWithCriteria method is used to retrieve data of a specified type T from a data source based on specific criteria provided through the ICriterion parameter. 

```csharp
List<ExpectedReturnType> FetchDataWithCriteria<ExpectedReturnType>(Type type, ICriterion criterion)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`criterion` ICriterion

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>

#### Type Parameters

`ExpectedReturnType` 

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataWithCriteria__1_NHibernate_Criterion_ICriterion_"></a> FetchDataWithCriteria<T\>\(ICriterion\)

The FetchDataWithCriteria method is used to retrieve data of a specified type T from a data source based on specific criteria provided through the ICriterion parameter.

```csharp
List<T> FetchDataWithCriteria<T>(ICriterion criterion)
```

#### Parameters

`criterion` ICriterion

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

#### Example

```
 using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
 {
     var criteria = Expression.Eq("Department", "IT");
     var data = Services.Persistor.FetchDataWithCriteria<UserInfo>(criteria);
 }
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataWithDetachedCriteria__1_NHibernate_Criterion_DetachedCriteria_"></a> FetchDataWithDetachedCriteria<ExpectedReturnType\>\(DetachedCriteria\)

Used to fetch data with `DetachedCriteria` , session less criteria

```csharp
List<ExpectedReturnType> FetchDataWithDetachedCriteria<ExpectedReturnType>(DetachedCriteria detachedCriteria)
```

#### Parameters

`detachedCriteria` - [DetachedCriteria](https://nhibernate.info/doc/nhibernate-reference/querycriteria.html)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>

#### Type Parameters

`ExpectedReturnType` 

#### Example
```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    DetachedCriteria detachedCriteria = DetachedCriteria.For<UserInfo>()
                                    .Add(Expression.Eq("Department", "IT"));
    var data = Services.Persistor.FetchDataWithDetachedCriteria<UserInfo>(detachedCriteria);
}
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataWithProjections__2_NHibernate_Criterion_IProjection_"></a> FetchDataWithProjections<T, ExpectedReturnType\>\(IProjection\)

Used to retrieve data of a specified type T with specific projections or transformations applied based on the IProjection parameter. 

```csharp
List<ExpectedReturnType> FetchDataWithProjections<T, ExpectedReturnType>(IProjection projection)
```

#### Parameters

`projection` IProjection

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>

#### Type Parameters

`T` 

`ExpectedReturnType` 

#### Example

```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    var projections = Projections.ProjectionList()
                        .Add(Projections.Property("Id"))
                        .Add(Projections.Property("Name"));
    var data = Services.Persistor.FetchDataWithProjections<UserInfo,IdNamePair>(projections);
}
//The above code will returns only the Id and Name of UserInfo from the datasource.
```

### <a id="PersistentService_Abstractions_INHibernatePersistor_FetchDataWithProjections__1_System_Type_NHibernate_Criterion_IProjection_"></a> FetchDataWithProjections<ExpectedReturnType\>\(Type, IProjection\)

The FetchDataWithProjections method is used to retrieve data of a specified type T with specific projections or transformations applied based on the IProjection parameter. 

```csharp
List<ExpectedReturnType> FetchDataWithProjections<ExpectedReturnType>(Type type, IProjection projection)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`projection` IProjection

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ExpectedReturnType\>

#### Type Parameters

`ExpectedReturnType` 

::::::info
Retrieving only properties of an entity or entities, without the overhead of loading the entity itself in a transactional scope. This is sometimes called a report query; it’s more correctly called `Projection`.
::::::

### <a id="PersistentService_Abstractions_INHibernatePersistor_GetRowCount_NHibernate_Criterion_DetachedCriteria_"></a> GetRowCount\(DetachedCriteria\)

Returns the number of rows that match the criteria instead of the actual data.

```csharp
int GetRowCount(DetachedCriteria detachedCriteria)
```

#### Parameters

`detachedCriteria` - [DetachedCriteria](https://nhibernate.info/doc/nhibernate-reference/querycriteria.html)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Example
```
using (new TenantDelegationContext(Scope.AssignCurrentDelegationFromSession()))
{
    DetachedCriteria detachedCriteria = DetachedCriteria.For<UserInfo>()
                                       .Add(Expression.Eq("Department", "IT"));
    var data = Services.Persistor.GetRowCount(detachedCriteria); 
}
```





