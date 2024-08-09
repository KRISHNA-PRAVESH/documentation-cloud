#  Interface ICloudPluginStateController

Namespace: [PluginStateService.Abstractions](PluginStateService.Abstractions.md)  
Assembly: PluginStateService.dll  

```csharp
public interface ICloudPluginStateController
```

## Methods

###  AfterApplicationStart\(\)

```csharp
bool AfterApplicationStart()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnApplicationEnd\(\)

```csharp
bool OnApplicationEnd()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnApplicationStart\(\)

```csharp
bool OnApplicationStart()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnFirstTimeStartUp\(\)

```csharp
bool OnFirstTimeStartUp()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  PauseJobs\(string\)

```csharp
bool PauseJobs(string reason = "")
```

#### Parameters

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  ResumeJobs\(\)

```csharp
bool ResumeJobs()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

