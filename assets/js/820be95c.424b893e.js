"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3705],{9222:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(4848),i=t(8453);const s={},l="Class IpUtil",r={id:"CloudCommon/CloudCommon.Utils.IpUtil",title:"Class IpUtil",description:"Namespace: CloudCommon.Utils",source:"@site/docs/CloudCommon/CloudCommon.Utils.IpUtil.md",sourceDirName:"CloudCommon",slug:"/CloudCommon/CloudCommon.Utils.IpUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.IpUtil",draft:!1,unlisted:!1,editUrl:"https://github.com/KRISHNA-PRAVESH/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.IpUtil.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class InterfaceUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.InterfaceUtil"},next:{title:"Class LockUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.LockUtil"}},c={},d=[{value:"Inheritance",id:"Inheritance",level:4},{value:"Inherited Members",id:"Inherited-Members",level:4},{value:"Extension Methods",id:"Extension-Methods",level:4},{value:"Methods",id:"Methods",level:2},{value:"replaced GetHostNameFromIp(string)",id:"replaced-GetHostNameFromIpstring",level:3},{value:"Parameters",id:"Parameters",level:4},{value:"Returns",id:"Returns",level:4},{value:"replaced IsLocalIpAddress(string)",id:"replaced-IsLocalIpAddressstring",level:3},{value:"Parameters",id:"Parameters-1",level:4},{value:"Returns",id:"Returns-1",level:4}];function m(e){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"Class-IpUtil",children:"Class IpUtil"}),"\n",(0,n.jsxs)(o.p,{children:["Namespace: ",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils",children:"CloudCommon.Utils"}),(0,n.jsx)(o.br,{}),"\nAssembly: CloudCommon.dll"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public class IpUtil\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Inheritance",children:"Inheritance"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})," \u2190\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.IpUtil",children:"IpUtil"})]}),"\n",(0,n.jsx)(o.h4,{id:"Inherited-Members",children:"Inherited Members"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)",children:"object.Equals(object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)",children:"object.Equals(object?, object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gethashcode",children:"object.GetHashCode()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gettype",children:"object.GetType()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone",children:"object.MemberwiseClone()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.referenceequals",children:"object.ReferenceEquals(object?, object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.tostring",children:"object.ToString()"})]}),"\n",(0,n.jsx)(o.h4,{id:"Extension-Methods",children:"Extension Methods"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_As__1_System_Object_",children:"GenericExtension.As<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.AssemblyUtil#CloudCommon_Utils_AssemblyUtil_ChangeType__1_System_Object_",children:"AssemblyUtil.ChangeType<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJson__1___0_",children:"GenericExtension.CloneByJson<IpUtil>(IpUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJsonUsingType_System_Object_System_Type_",children:"GenericExtension.CloneByJsonUsingType(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinary_System_Object_",children:"ObjectUtil.ConvertToBinary(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryProtoBuf_System_Object_",children:"ObjectUtil.ConvertToBinaryProtoBuf(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryWithGZipCompression_System_Object_",children:"ObjectUtil.ConvertToBinaryWithGZipCompression(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression__1_System_Object_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression_System_Object_System_Type_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CopyPropertiesTo__2___0___1_",children:"GenericExtension.CopyPropertiesTo<IpUtil, U>(IpUtil, U)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_DeepCopy__1___0_",children:"GenericExtension.DeepCopy<IpUtil>(IpUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize__1_System_Object_",children:"BinarySerializationUtil.Deserialize<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize_System_Object_System_Type_",children:"BinarySerializationUtil.Deserialize(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_EqualsAnyOf__1___0___0___",children:"GenericExtension.EqualsAnyOf<IpUtil>(IpUtil, params IpUtil[])"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Serialize_System_Object_",children:"BinarySerializationUtil.Serialize(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeUsingUTF8JSON_System_Object_",children:"ObjectUtil.SerializeUsingUTF8JSON(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeWithProtoBuf__1___0_",children:"ObjectUtil.SerializeWithProtoBuf<IpUtil>(IpUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_ToSerializedJsonString__1___0_System_Boolean_",children:"GenericExtension.ToSerializedJsonString<IpUtil>(IpUtil, bool)"})]}),"\n",(0,n.jsx)(o.h2,{id:"Methods",children:"Methods"}),"\n",(0,n.jsx)(o.h3,{id:"replaced-GetHostNameFromIpstring",children:"replaced GetHostNameFromIp(string)"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public static string GetHostNameFromIp(string ipAddress)\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"ipAddress"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})]}),"\n",(0,n.jsx)(o.h4,{id:"Returns",children:"Returns"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})}),"\n",(0,n.jsx)(o.h3,{id:"replaced-IsLocalIpAddressstring",children:"replaced IsLocalIpAddress(string)"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public static bool IsLocalIpAddress(string host)\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"host"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})]}),"\n",(0,n.jsx)(o.h4,{id:"Returns-1",children:"Returns"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.boolean",children:"bool"})})]})}function a(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>r});var n=t(6540);const i={},s=n.createContext(i);function l(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);