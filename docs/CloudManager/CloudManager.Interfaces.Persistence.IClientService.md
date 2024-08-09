#  Interface IClientService

Namespace: [CloudManager.Interfaces.Persistence](CloudManager.Interfaces.Persistence.md)  
Assembly: CloudManager.dll  

this service is only enabled for product assistor client.

```csharp
public interface IClientService
```

## Methods

###  ExecuteRemoteActionAsync\(RemoteActionArguements\)

used to execute an remote action in client apps

```csharp
Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> ExecuteRemoteActionAsync(RemoteActionArguements arguement)
```

#### Parameters

`arguement` [RemoteActionArguements](CloudManager.Models.RemoteActionArguements.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  GetClientAppLogAsync\(string, LogOptions\)

The GetClientAppLogAsync method is an asynchronous operation aimed at retrieving logs for a specific client application. It takes two parameters: appId, a string representing the identifier of the client application, and logOptions, an object of type LogOptions that likely contains parameters or options for specifying the characteristics of the logs to be retrieved. The method returns a Task representing an asynchronous operation, and the result is wrapped in a OneOf type, allowing for various outcomes such as success (ApiResponse) or different error types (UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownError). The specific details regarding the structure of LogOptions and the handling of different error scenarios are not explicitly provided in the code, requiring additional documentation or context for a thorough understanding.

```csharp
Task<Stream> GetClientAppLogAsync(string appId, LogOptions logOptions)
```

#### Parameters

`appId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`logOptions` [LogOptions](CloudManager.Models.LogOptions.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)\>

###  GetClientAppsAsync\(\)

this method used to serve the purpose of retrieving information about registered client applications from a system or service called CPM

```csharp
Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetClientAppsAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

###  GetDBTenantAdminInfo\(\)

used to fetch the db tenant logins info

```csharp
Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetDBTenantAdminInfo()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

###  GetRemoteSettingsAsync\(string\)

The GetRemoteSettingsAsync method is an asynchronous operation designed to retrieve remote settings. The method returns a Task representing an asynchronous operation, and the result is wrapped in a OneOf type, allowing for various outcomes such as success (ApiResponse) or different error types (UnAuthorizedAccessError, InvalidScopeError, InternalServerError, or UnknownErro

```csharp
Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetRemoteSettingsAsync(string appId)
```

#### Parameters

`appId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError\>\>

