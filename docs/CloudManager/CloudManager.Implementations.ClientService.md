#  Class ClientService

Namespace: [CloudManager.Implementations](CloudManager.Implementations.md)  
Assembly: CloudManager.dll  

```csharp
public class ClientService : IClientService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClientService](CloudManager.Implementations.ClientService.md)

#### Implements

[IClientService](CloudManager.Interfaces.Persistence.IClientService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  ExecuteRemoteActionAsync\(RemoteActionArguements\)

used to execute an remote action in client apps

```csharp
public Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> ExecuteRemoteActionAsync(RemoteActionArguements argument)
```

#### Parameters

`argument` [RemoteActionArguements](CloudManager.Models.RemoteActionArguements.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  GetClientAppLogAsync\(string, LogOptions\)

The GetClientAppLogAsync method is an asynchronous operation aimed at retrieving logs for a specific client application. It takes two parameters: appId, a string representing the identifier of the client application, and logOptions, an object of type LogOptions that likely contains parameters or options for specifying the characteristics of the logs to be retrieved. The method returns a Task representing an asynchronous operation, and the result is wrapped in a OneOf type, allowing for various outcomes such as success (ApiResponse) or different error types (UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError). The specific details regarding the structure of LogOptions and the handling of different error scenarios are not explicitly provided in the code, requiring additional documentation or context for a thorough understanding.

```csharp
public Task<Stream> GetClientAppLogAsync(string appId, LogOptions logOptions)
```

#### Parameters

`appId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`logOptions` [LogOptions](CloudManager.Models.LogOptions.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)\>

###  GetClientAppsAsync\(\)

this method used to serve the purpose of retrieving information about registered client applications from a system or service called CPM

```csharp
public Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetClientAppsAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

###  GetDBTenantAdminInfo\(\)

used to fetch the db tenant logins info

```csharp
public Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetDBTenantAdminInfo()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

###  GetRemoteSettingsAsync\(string\)

The GetRemoteSettingsAsync method is an asynchronous operation designed to retrieve remote settings. The method returns a Task representing an asynchronous operation, and the result is wrapped in a OneOf type, allowing for various outcomes such as success (ApiResponse) or different error types (UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownErro

```csharp
public Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetRemoteSettingsAsync(string appId)
```

#### Parameters

`appId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

