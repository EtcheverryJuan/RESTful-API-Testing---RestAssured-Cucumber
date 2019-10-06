$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DELETE_user.feature");
formatter.feature({
  "name": "Verify Delete user functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "DELETE method with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"tester\" and password \"maniac\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a successful response and a confirmation message",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.iShouldReceiveASuccessfulResponseAndAConfirmationMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to get access with username \"jetche4\" and password \"tester\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationToGetAccessWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"invalid\" and password \"data\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with empty credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"\" and password \"\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with empty password credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"invalid\" and password \"\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with invalid username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"tester\" and password \"maniac\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche213"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Username jetche213 does not exist.\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 404",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with invalid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"tester\" and password \"maniac\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "8"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche213@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Email does not exist\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path message doesn\u0027t match.\nExpected: is \"Email does not exist\"\n  Actual: Username jetche4 does not exist.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat steps.UserAPI_steps.iShouldSeeTheInBodyResponse(UserAPI_steps.java:34)\r\n\tat ✽.I should see the \"message\" \"Email does not exist\" in body response(file:src/test/java/features/DELETE_user.feature:83)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code should be 404",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "DELETE method without optional fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"tester\" and password \"maniac\" with body \"jetche4\" and \"jetche4@wearewaes.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithBodyAnd(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a successful response and a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldReceiveASuccessfulResponseAndAConfirmationMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE method with invalid optional fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation with username \"tester\" and password \"maniac\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "23123131"
      ]
    },
    {
      "cells": [
        "name",
        "Some Tester"
      ]
    },
    {
      "cells": [
        "username",
        "jetche4"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "true"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1982-03-11"
      ]
    },
    {
      "cells": [
        "email",
        "jetche4@wearewaes.com"
      ]
    },
    {
      "cells": [
        "superpower",
        "Other Superpower"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.iPerformDELETEOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a successful response and a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldReceiveASuccessfulResponseAndAConfirmationMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GET_access.feature");
formatter.feature({
  "name": "Verify GET access operation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "GET access method with valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to get access with username \"tester\" and password \"maniac\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationToGetAccessWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"username\" \"tester\" in body response",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET access method with invalid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to get access with username \"invalid\" and password \"data\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationToGetAccessWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET access method with no auth data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation on \"/access\" with no auth data",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationOnWithNoAuthData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Full authentication is required to access this resource\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET access method with empty username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to get access with username \"\" and password \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationToGetAccessWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET access method with empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to get access with username \"tester\" and password \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationToGetAccessWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GET_all_users_information.feature");
formatter.feature({
  "name": "Verify GET all user information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "GET all users details with valid information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation for all users with username: \"admin\" and password: \"hero\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationForAllUsersWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of users with all their information",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldGetAListOfUsersWithAllTheirInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET all users details with invalid auth data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation for all users with username: \"invalid\" and password: \"data\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationForAllUsersWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Bad credentials\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET all users details with no auth data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation on \"/all\" with no auth data",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationOnWithNoAuthData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Full authentication is required to access this resource\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 401",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GET_user_information_by_username.feature");
formatter.feature({
  "name": "Verify GET user information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "GET user details with valid information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation with username \"dev\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationWithUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"name\" \"Zuper Dooper Dev\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"password\" field is not present",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.passwordFieldIsNotPresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET user details with Invalid information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation with username \"invalid\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationWithUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Username invalid does not exist.\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 404",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET user details without queryParam",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation without query parameter",
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformGETOperationWithoutQueryParameter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/POST_sign_up.feature");
formatter.feature({
  "name": "Verify POST sign up functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "POST method with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche5"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche5@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a successful response and my information in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldGetASuccessfulResponseAndMyInformationInTheResponse()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c403\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor73.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor162.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat steps.UserAPI_steps.iShouldGetASuccessfulResponseAndMyInformationInTheResponse(UserAPI_steps.java:139)\r\n\tat ✽.I should get a successful response and my information in the response(file:src/test/java/features/POST_sign_up.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "POST method with existing data in DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche5"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche5@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Username or email already registered. Please select different values.\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 403",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "POST method with empty data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        ""
      ]
    },
    {
      "cells": [
        "isAdmin",
        ""
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        ""
      ]
    },
    {
      "cells": [
        "email",
        ""
      ]
    },
    {
      "cells": [
        "name",
        ""
      ]
    },
    {
      "cells": [
        "password",
        ""
      ]
    },
    {
      "cells": [
        "superpower",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Cannot pass null or empty values to constructor\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "POST method with existing data in DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform POST with the following data",
  "rows": [
    {
      "cells": [
        "username",
        "jetche5"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1986-07-10"
      ]
    },
    {
      "cells": [
        "email",
        "jetche5@wearewaes.com"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "tester"
      ]
    },
    {
      "cells": [
        "superpower",
        "Super Sayan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPOSTWithTheFollowingData(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Username or email already registered. Please select different values.\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 403",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/PUT_update_user.feature");
formatter.feature({
  "name": "Verify Update user functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "PUT method with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "10"
      ]
    },
    {
      "cells": [
        "username",
        "jetche2"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1970-01-01"
      ]
    },
    {
      "cells": [
        "email",
        "edited@edited.com"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "testedited"
      ]
    },
    {
      "cells": [
        "superpower",
        "Gomu Gomu No Mi"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a successful response and information of user updated",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldReceiveASuccessfulResponseAndInformationOfUserUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT method with invalid username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "10"
      ]
    },
    {
      "cells": [
        "username",
        "jetche90"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1970-01-01"
      ]
    },
    {
      "cells": [
        "email",
        "edited@edited.com"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "testedited"
      ]
    },
    {
      "cells": [
        "superpower",
        "Gomu Gomu No Mi"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"user should exist\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT method with invalid id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "9483746"
      ]
    },
    {
      "cells": [
        "username",
        "jetche2"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1970-01-01"
      ]
    },
    {
      "cells": [
        "email",
        "emailedit@edited.com"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "testedited"
      ]
    },
    {
      "cells": [
        "superpower",
        "Gomu Gomu No Mi"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Username jetche2 does not exist.\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 404",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT method with empty data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        ""
      ]
    },
    {
      "cells": [
        "username",
        ""
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        ""
      ]
    },
    {
      "cells": [
        "email",
        ""
      ]
    },
    {
      "cells": [
        "isAdmin",
        ""
      ]
    },
    {
      "cells": [
        "name",
        ""
      ]
    },
    {
      "cells": [
        "password",
        ""
      ]
    },
    {
      "cells": [
        "superpower",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"The given id must not be null!; nested exception is java.lang.IllegalArgumentException: The given id must not be null!\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT method with email incorrect format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "10"
      ]
    },
    {
      "cells": [
        "username",
        "jetche2"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1970-01-01"
      ]
    },
    {
      "cells": [
        "email",
        "edited.com"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "testedited"
      ]
    },
    {
      "cells": [
        "superpower",
        "Gomu Gomu No Mi"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Email bad format\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path message doesn\u0027t match.\nExpected: is \"Email bad format\"\n  Actual: null\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor73.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor164.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat steps.UserAPI_steps.iShouldSeeTheInBodyResponse(UserAPI_steps.java:34)\r\n\tat ✽.I should see the \"message\" \"Email bad format\" in body response(file:src/test/java/features/PUT_update_user.feature:67)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "PUT method with date incorrect format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform PUT operation with username \"admin\" and password \"hero\" with data",
  "rows": [
    {
      "cells": [
        "id",
        "10"
      ]
    },
    {
      "cells": [
        "username",
        "jetche2"
      ]
    },
    {
      "cells": [
        "dateOfBirth",
        "1970asd"
      ]
    },
    {
      "cells": [
        "email",
        "edit@edited.com"
      ]
    },
    {
      "cells": [
        "isAdmin",
        "false"
      ]
    },
    {
      "cells": [
        "name",
        "Juan Etcheverry"
      ]
    },
    {
      "cells": [
        "password",
        "testedited"
      ]
    },
    {
      "cells": [
        "superpower",
        "Gomu Gomu No Mi"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserAPI_steps.iPerformPUTOperationWithUsernameAndPasswordWithData(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"message\" \"Date bad format\" in body response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAPI_steps.iShouldSeeTheInBodyResponse(String,String)"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: Expected response body to be verified as JSON, HTML or XML but no content-type was defined in the response.\nTry registering a default parser using:\n   RestAssured.defaultParser(\u003cparser type\u003e);\nContent was:\n\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.assertion.StreamVerifier.newAssertion(StreamVerifier.groovy:43)\r\n\tat io.restassured.assertion.StreamVerifier$newAssertion.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcher.validate(BodyMatcher.groovy:85)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcherGroup$_validate_closure2.doCall(BodyMatcherGroup.groovy:47)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor160.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:263)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.Closure.call(Closure.java:405)\r\n\tat groovy.lang.Closure.call(Closure.java:421)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3574)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3559)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3659)\r\n\tat org.codehaus.groovy.runtime.dgm$87.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce.invoke(PojoMetaMethodSite.java:244)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:53)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:127)\r\n\tat io.restassured.assertion.BodyMatcherGroup.validate(BodyMatcherGroup.groovy:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:480)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor73.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor164.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat steps.UserAPI_steps.iShouldSeeTheInBodyResponse(UserAPI_steps.java:34)\r\n\tat ✽.I should see the \"message\" \"Date bad format\" in body response(file:src/test/java/features/PUT_update_user.feature:80)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "And "
});
formatter.match({
  "location": "UserAPI_steps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
});