#  Interface ICloudPlugin

Namespace: [PluginStateService.Abstractions](PluginStateService.Abstractions.md)  
Assembly: PluginStateService.dll  

```csharp
public interface ICloudPlugin
```

## Methods

###  GetPluginDirectory\(\)

```csharp
string GetPluginDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetPluginName\(\)

```csharp
string GetPluginName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  RegisterPlugin<T\>\(string, string\)

```csharp
SchedularImpl RegisterPlugin<T>(string name, string pluginRootDir = "") where T : ICloudPluginStateController
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginRootDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Type Parameters

`T` 

###  isFirstTime\(\)

```csharp
bool isFirstTime()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

