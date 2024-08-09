#  Interface INHibernatePersistentManager

Namespace: [PersistentService.Abstractions](PersistentService.Abstractions.md)  
Assembly: PersistentService.dll  

used to injecting the persistent manager both cloud and on premise implemented same methods.

```csharp
public interface INHibernatePersistentManager
```

## Methods

###  CreateConfiguration\(List<Assembly\>\)

used to create configuration

```csharp
Configuration CreateConfiguration(List<Assembly> assemblies)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

#### Returns

 Configuration

###  CreateTables\(\)

it will drop table and re create it

```csharp
void CreateTables()
```

###  GetClassForTableName\(string\)

used to fetch the type name from the table mapped

```csharp
string GetClassForTableName(string tableName)
```

#### Parameters

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetColumnNameFormat\(PropertyPath\)

used to fetch the column name format

```csharp
string GetColumnNameFormat(PropertyPath propertyPath)
```

#### Parameters

`propertyPath` PropertyPath

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetConfiguration\(\)

used to fetch the configuration instance

```csharp
Configuration GetConfiguration()
```

#### Returns

 Configuration

###  GetConnectionTimeout\(\)

used to fetch the connection timeout

```csharp
int GetConnectionTimeout()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  GetIdProperties\(Type\)

used to fetch the id properties of a type

```csharp
string[] GetIdProperties(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

###  GetLatestSequenceValue\(Type, string\)

used to fetch the latest sequence value for the given column

```csharp
int GetLatestSequenceValue(Type type, string columnName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  GetProperties\(Type\)

used to fetch the normal table properties of a type

```csharp
string[] GetProperties(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

###  GetPropertyType\(Type, string\)

used to fetch the property type

```csharp
IType GetPropertyType(Type type, string propertyName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 IType

###  GetSessionFactory\(\)

used to fetch the current session factory

```csharp
ISessionFactory GetSessionFactory()
```

#### Returns

 ISessionFactory

###  GetSqlTypeForProperty\(Type, string\)

used ti fetch the sql type property

```csharp
SqlType GetSqlTypeForProperty(Type type, string propertyName)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 SqlType

###  GetTableName\(Type\)

used to fetch the table name from the type

```csharp
string GetTableName(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTableNameFormat\(string, Type\)

used to fetch the table name format

```csharp
string GetTableNameFormat(string assemblyPrefix, Type type)
```

#### Parameters

`assemblyPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTableNameFromClassMappings\(Type\)

used to fetch the table name from type as argument

```csharp
string GetTableNameFromClassMappings(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  Initialize\(List<Assembly\>\)

/used to initialize session factory and creating configuration

```csharp
void Initialize(List<Assembly> assemblies)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

###  InitializeSessionFactory\(bool\)

used to initialize session factory

```csharp
void InitializeSessionFactory(bool retry = false)
```

#### Parameters

`retry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Update\(Assembly, bool\)

used to update the configuration class assembly

```csharp
void Update(Assembly assembly, bool isSessionFactoryInitialize = true)
```

#### Parameters

`assembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

`isSessionFactoryInitialize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  UpdateSchema\(\)

used to update tables this will not drop tables

```csharp
void UpdateSchema()
```

###  UpdateSchema\(List<Assembly\>, Configuration\)

used to update the tables with specific configuration

```csharp
void UpdateSchema(List<Assembly> assemblies, Configuration configurationFromParam = null)
```

#### Parameters

`assemblies` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

`configurationFromParam` Configuration

