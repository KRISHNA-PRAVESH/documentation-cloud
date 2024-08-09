#  Class PluginServiceExtension

Namespace: [PluginStateService](PluginStateService.md)  
Assembly: PluginStateService.dll  

used to added static configurations

```csharp
public static class PluginServiceExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginServiceExtension](PluginStateService.PluginServiceExtension.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  AddAppDisposeHook\(WebApplication\)

used dispose loaded plugins on application end

```csharp
public static WebApplication AddAppDisposeHook(this WebApplication app)
```

#### Parameters

`app` [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

#### Returns

 [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

###  AddPluginLogging\(IServiceCollection\)

used for inject login service for plugin state

```csharp
public static IServiceCollection AddPluginLogging(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

