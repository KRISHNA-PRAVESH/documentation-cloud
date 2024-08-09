#  Class AuthUtils

Namespace: [CloudCore.Utils](CloudCore.Utils.md)  
Assembly: CloudCore.dll  

used for verify auth code

```csharp
public class AuthUtils
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthUtils](CloudCore.Utils.AuthUtils.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  GetLoggedInUserAccountDetail\(\)

```csharp
public static Account GetLoggedInUserAccountDetail()
```

#### Returns

 Account

###  GetLoggedInUserId\(\)

```csharp
public static long GetLoggedInUserId()
```

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

###  VerifyCode\(string\)

used to verify authcode

```csharp
public static Task VerifyCode(string code)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

