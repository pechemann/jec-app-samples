//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test, Before, After, Async } from "jec-juta";
import { expect } from "chai";
import { Users } from "../../src/resource/Users";

@TestSuite({
  description: "Test the Users class methods"
})
export class UsersTest {

  public users:Users = null;

  @Before()
  public initTest():void {
    this.users = new Users();
  }

  @After()
  public resetTest():void {
    this.users = null;
  }

  @Test({
    description: "should return the complete list of user registered in the app"
  })
  public getUsersTest(@Async done:Function):void {
    this.users.getUsers((data:any, err:any)=>{
      expect(data.length).to.equals(1);
      done();
    });
  }
}