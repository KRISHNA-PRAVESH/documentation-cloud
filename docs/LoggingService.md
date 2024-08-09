---
sidebar_position: 10
sidebar_label : Logging
---
# ILoggingService

Namespace: [LoggingService.Abstractions](LoggingService.Abstractions.md)  
Assembly: LoggingService.dll  

It enables the creation of log messages at different levels of severity (e.g., debug, info, warning, error, exception) based on the events occurring within the system.

```csharp
public interface ILoggingService
```
The following line registers `NLogger` as a logging service in the application.

```
builder.Services.AddAppLogging();
```
## Methods

### <a id="LoggingService_Abstractions_ILoggingService_Debug_System_String_System_Object___"></a> Debug\(string, params object\[\]\)

Writes the diagnostic message at the **Debug** level using the specified parameters.

```csharp
void Debug(string message, params object[] logObjects)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string) - The Debug message.

`logObjects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example
```
CloudManager.Services.LoggingService.Debug("User {0} has logged in with the username {1}", userId, userName);
```

### <a id="LoggingService_Abstractions_ILoggingService_Error_System_String_System_Object___"></a> Error\(string, params object\[\]\)

Writes the diagnostic message at the **Error** level using the specified parameters.

```csharp
void Error(string message, params object[] logObjects)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string) - The Error message.

`logObjects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example

```
Services.LoggingService.Error("User {0} has logged in with the username {1}", userId, userName);
```

### <a id="LoggingService_Abstractions_ILoggingService_Info_System_String_System_Object___"></a> Info\(string, params object\[\]\)

Writes the diagnostic message at the **Info** level using the specified parameters.

```csharp
void Info(string message, params object[] logObjects)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string) - The information string.

`logObjects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example

```
Services.LoggingService.Info("User {0} has logged in with the username {1}", userId, userName);
```

### <a id="LoggingService_Abstractions_ILoggingService_Trace_System_String_System_Object___"></a> Trace\(string, params object\[\]\)

Trace is the Most verbose level. Used for development and seldom enabled in production.

```csharp
void Trace(string message, params object[] logObjects)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string) - The message.

`logObjects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example
```
Services.LoggingService.Trace("User {0} has logged in with the username {1}", userId, userName);
```


### <a id="LoggingService_Abstractions_ILoggingService_Warn_System_String_System_Object___"></a> Warn\(string, params object\[\]\)

Warn accepts a message string as its primary parameter, which elucidates the warning being logged. Additionally, it supports an optional parameter logObjects

```csharp
void Warn(string message, params object[] logObjects)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string) - The warning message.

`logObjects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example
```
Services.LoggingService.Warn("User {0} has logged in with the username {1}", userId, userName);
```
### <a id="LoggingService_Abstractions_ILoggingService_Exception_System_Exception_System_String_System_Object___"></a> Exception\(Exception, string?, params object\[\]\)

Used to log unknown exceptions.

```csharp
void Exception(Exception exception, string? errorMessage = null, params object[] objects)
```

#### Parameters

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception) - The Exception object

`errorMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)? - Error Message 

`objects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\] - An array of objects used as an arguments for the message tempalte.

#### Example

```
try
{
    throw new Exception("An Unknown Error occured.");
}
catch (Exception ex)
{
    Services.LoggingService.Exception(ex,ex.Message);
}
```