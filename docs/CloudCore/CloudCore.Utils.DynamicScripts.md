#  Class DynamicScripts

Namespace: [CloudCore.Utils](CloudCore.Utils.md)  
Assembly: CloudCore.dll  

```csharp
public class DynamicScripts : IDynamicScripts
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DynamicScripts](CloudCore.Utils.DynamicScripts.md)

#### Implements

IDynamicScripts

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  Compute\(\)

```csharp
public JavaScriptResult Compute()
```

#### Returns

 JavaScriptResult

###  Get\(\)

dynamically computes js script

```csharp
public Task<JavaScriptResult> Get()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<JavaScriptResult\>

###  GetCss\(\)

```csharp
public CssResult GetCss()
```

#### Returns

 CssResult

