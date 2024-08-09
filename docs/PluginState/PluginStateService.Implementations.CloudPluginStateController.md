#  Class CloudPluginStateController

Namespace: [PluginStateService.Implementations](PluginStateService.Implementations.md)  
Assembly: PluginStateService.dll  

```csharp
public abstract class CloudPluginStateController : ICloudPluginStateController
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CloudPluginStateController](PluginStateService.Implementations.CloudPluginStateController.md)

#### Implements

[ICloudPluginStateController](PluginStateService.Abstractions.ICloudPluginStateController.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  AfterApplicationStart\(\)

```csharp
public abstract bool AfterApplicationStart()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  DisposeLoadedPlugins\(\)

```csharp
public static void DisposeLoadedPlugins()
```

###  InitializeLoadedPlugins\(\)

```csharp
public static bool InitializeLoadedPlugins()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnApplicationEnd\(\)

```csharp
public abstract bool OnApplicationEnd()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnApplicationStart\(\)

```csharp
public abstract bool OnApplicationStart()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  OnFirstTimeStartUp\(\)

```csharp
public abstract bool OnFirstTimeStartUp()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  PauseJobs\(string\)

```csharp
public abstract bool PauseJobs(string reason = "")
```

#### Parameters

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  ResumeJobs\(\)

```csharp
public abstract bool ResumeJobs()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

