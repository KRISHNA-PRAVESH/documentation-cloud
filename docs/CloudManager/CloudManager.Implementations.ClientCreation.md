#  Class ClientCreation

Namespace: [CloudManager.Implementations](CloudManager.Implementations.md)  
Assembly: CloudManager.dll  

```csharp
public class ClientCreation : IClientCreation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClientCreation](CloudManager.Implementations.ClientCreation.md)

#### Implements

[IClientCreation](CloudManager.Interfaces.Persistence.IClientCreation.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  HandshakeCPM\(\)

used to create mutual connection between client and server

```csharp
public Task HandshakeCPM()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

###  RegisterClientConstants\(Action<ClientCreationConstants\>\)

used for registering custom client creation path and configurations

```csharp
public static void RegisterClientConstants(Action<ClientCreationConstants> action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ClientCreationConstants](CloudManager.Models.ClientCreationConstants.md)\>

