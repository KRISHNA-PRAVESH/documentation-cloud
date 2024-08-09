#  Struct Services

Namespace: [CloudManager](CloudManager.md)  
Assembly: CloudManager.dll  

essential services required for running a sass product

```csharp
public struct Services
```

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  AsyncPersistor

used for asynchronous db related operations

```csharp
public static INHibernateAsyncPersistor AsyncPersistor { get; set; }
```

#### Property Value

 INHibernateAsyncPersistor

###  CacheService

responsible for the caching layer

```csharp
public static ICacheService CacheService { get; }
```

#### Property Value

 ICacheService

###  ClientCreation

responsible for the client interactions between the services

```csharp
public static IClientCreation ClientCreation { get; }
```

#### Property Value

 [IClientCreation](CloudManager.Interfaces.Persistence.IClientCreation.md)

###  ClientService

responsible for the application utils and current status this will invoked on behalf of cpm server

```csharp
public static IClientService ClientService { get; }
```

#### Property Value

 [IClientService](CloudManager.Interfaces.Persistence.IClientService.md)

###  LoggingService

responsible for the logging mechanism

```csharp
public static ILoggingService LoggingService { get; }
```

#### Property Value

 ILoggingService

###  Persistor

used for synchronous db related operations

```csharp
public static INHibernatePersistor Persistor { get; set; }
```

#### Property Value

 INHibernatePersistor

## Methods

###  RegisterAsyncPersistentLayer\(INHibernateAsyncPersistor\)

used for registering asynchronous persistent layer as a singleton object

```csharp
public static void RegisterAsyncPersistentLayer(INHibernateAsyncPersistor nHibernateAsyncPersistor)
```

#### Parameters

`nHibernateAsyncPersistor` INHibernateAsyncPersistor

###  RegisterCacheService\(ICacheService\)

used to registering the cache service as a singleton object

```csharp
public static void RegisterCacheService(ICacheService cacheService)
```

#### Parameters

`cacheService` ICacheService

###  RegisterLoggingService\(ILoggingService\)

used to registering logging service as a singleton object

```csharp
public static void RegisterLoggingService(ILoggingService loggingService)
```

#### Parameters

`loggingService` ILoggingService

###  RegisterPersistentLayer\(INHibernatePersistor\)

used to registering persistent layer as a singleton object

```csharp
public static void RegisterPersistentLayer(INHibernatePersistor persistentLayer)
```

#### Parameters

`persistentLayer` INHibernatePersistor

