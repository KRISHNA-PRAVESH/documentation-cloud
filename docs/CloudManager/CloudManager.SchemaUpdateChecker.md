#  Class SchemaUpdateChecker

Namespace: [CloudManager](CloudManager.md)  
Assembly: CloudManager.dll  

used for whether schema update required or not for registered tenant

```csharp
public class SchemaUpdateChecker
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SchemaUpdateChecker](CloudManager.SchemaUpdateChecker.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  ConfirmSchemaUpdate\(\)

calling once schema update successfully completed

```csharp
public static void ConfirmSchemaUpdate()
```

###  IsNeedToUpdateSchema\(\)

check whether current delegated tenant needed schema update

```csharp
public static bool IsNeedToUpdateSchema()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  RegisterCurrentUpdateChecker\(List<Type\>\)

it will create an random id and the current executing assembly properties and extract their types and properties

```csharp
public static void RegisterCurrentUpdateChecker(List<Type> types)
```

#### Parameters

`types` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Type](https://learn.microsoft.com/dotnet/api/system.type)\>

###  UpdateLatestTenantAndAppWithCache\(\)

```csharp
public static void UpdateLatestTenantAndAppWithCache()
```

