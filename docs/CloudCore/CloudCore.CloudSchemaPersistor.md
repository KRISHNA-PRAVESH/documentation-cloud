#  Class CloudSchemaPersistor

Namespace: [CloudCore](CloudCore.md)  
Assembly: CloudCore.dll  

used for creating data base related settings

```csharp
public class CloudSchemaPersistor : INHibernatePersistentManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CloudSchemaPersistor](CloudCore.CloudSchemaPersistor.md)

#### Implements

INHibernatePersistentManager

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

###  FrequentlyUsedSessionFactories

```csharp
public static Dictionary<string, ISessionFactory> FrequentlyUsedSessionFactories
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), ISessionFactory\>

## Properties

###  AppConfiguration

```csharp
public static Configuration AppConfiguration { get; set; }
```

#### Property Value

 Configuration

###  AppIdentifier

```csharp
public static string AppIdentifier { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppSessionFactory

```csharp
public static ISessionFactory AppSessionFactory { get; set; }
```

#### Property Value

 ISessionFactory

###  TenantConfiguration

```csharp
public static Configuration TenantConfiguration { get; set; }
```

#### Property Value

 Configuration

###  TenantInitialConfiguration

```csharp
public static Configuration TenantInitialConfiguration { get; set; }
```

#### Property Value

 Configuration

###  TenantSessionFactory

```csharp
public static ISessionFactory TenantSessionFactory { get; set; }
```

#### Property Value

 ISessionFactory

## Methods

###  ComputeRegisteredAssemblies\(\)

used to check whether schema needs update

```csharp
public static void ComputeRegisteredAssemblies()
```

###  CreateConfiguration\(List<Assembly\>\)

used to create configuration

```csharp
public Configuration CreateConfiguration(List<Assembly> assemblies)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

#### Returns

 Configuration

###  CreateTables\(\)

it will drop table and re create it

```csharp
public void CreateTables()
```

###  GetClassForTableName\(string\)

used to fetch the type name from the table mapped

```csharp
public string GetClassForTableName(string tableName)
```

#### Parameters

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetConfiguration\(\)

used to fetch the configuration instance

```csharp
public Configuration GetConfiguration()
```

#### Returns

 Configuration

###  GetConnectionTimeout\(\)

used to fetch the connection timeout

```csharp
public int GetConnectionTimeout()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  GetIdProperties\(Type\)

used to fetch the id properties of a type

```csharp
public string[] GetIdProperties(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

###  GetLatestSequenceValue\(Type, string\)

used to fetch the latest sequence value for the given column

```csharp
public int GetLatestSequenceValue(Type type, string columnName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  GetProperties\(Type\)

used to fetch the normal table properties of a type

```csharp
public string[] GetProperties(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

###  GetPropertyType\(Type, string\)

used to fetch the property type

```csharp
public IType GetPropertyType(Type type, string propertyName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 IType

###  GetSessionFactory\(\)

used to fetch the current session factory

```csharp
public virtual ISessionFactory GetSessionFactory()
```

#### Returns

 ISessionFactory

###  GetSqlTypeForProperty\(Type, string\)

used ti fetch the sql type property

```csharp
public SqlType GetSqlTypeForProperty(Type type, string propertyName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 SqlType

###  GetTableName\(Type\)

used to fetch the table name from the type

```csharp
public string GetTableName(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTableNameFromClassMappings\(Type\)

used to fetch the table name from type as argument

```csharp
public string GetTableNameFromClassMappings(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTenantConfiguration\(\)

used for fetching current tenant database configuration

```csharp
public virtual TenantConfigurationInstance GetTenantConfiguration()
```

#### Returns

 TenantConfigurationInstance

###  Initialize\(List<Assembly\>\)

/used to initialize session factory and creating configuration

```csharp
public void Initialize(List<Assembly> assemblies)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

###  InitializeDefaultConfigurationsForApp\(\)

it will initialize app configurations and app session factory if app scope is applied then app session factory will be returned...

```csharp
public static void InitializeDefaultConfigurationsForApp()
```

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  InitializeDefaultConfigurationsForTenant\(\)

it will used to initialize default tenant configuration with the public schema

```csharp
public static void InitializeDefaultConfigurationsForTenant()
```

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

###  InitializeSessionFactory\(bool\)

used to initialize session factory

```csharp
public void InitializeSessionFactory(bool retry = false)
```

#### Parameters

`retry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  RegisterPersistentAssembly\(Assembly\[\]\)

used for registering persistent assembly for default table creations

```csharp
public static void RegisterPersistentAssembly(Assembly[] assemblies)
```

#### Parameters

`assemblies` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\[\]

###  RegisterTenantConfigurationInvoker\(Func<TenantConfigurationInstance\>\)

```csharp
public static void RegisterTenantConfigurationInvoker(Func<TenantConfigurationInstance> tenantConfigurationInvoker)
```

#### Parameters

`tenantConfigurationInvoker` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<TenantConfigurationInstance\>

###  Update\(Assembly, bool\)

used to update the configuration class assembly

```csharp
public void Update(Assembly assembly, bool isSessionFactoryInitialize = true)
```

#### Parameters

`assembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`isSessionFactoryInitialize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  UpdateSchema\(\)

used to update tables this will not drop tables

```csharp
public void UpdateSchema()
```

###  UpdateSchema\(List<Assembly\>, Configuration\)

used to update the tables with specific configuration

```csharp
public void UpdateSchema(List<Assembly> assemblies, Configuration configurationFromParam = null)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

`configurationFromParam` Configuration

