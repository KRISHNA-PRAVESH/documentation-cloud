#  Class SessionModel

Namespace: [CloudCore.Models](CloudCore.Models.md)  
Assembly: CloudCore.dll  

```csharp
[MessagePackObject(false)]
public class SessionModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionModel](CloudCore.Models.SessionModel.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  Account

```csharp
[Key(5)]
public Account Account { get; set; }
```

#### Property Value

 Account

###  GlobalTenantId

```csharp
[Key(0)]
public string GlobalTenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ObjectId

```csharp
[Key(1)]
public string ObjectId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserName

```csharp
[Key(4)]
public string UserName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserPrinciplaName

```csharp
[Key(3)]
public string UserPrinciplaName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserTenant

```csharp
[Key(2)]
public string UserTenant { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  id

```csharp
[Key(6)]
public long id { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

