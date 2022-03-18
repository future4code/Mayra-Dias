import { UserBusiness } from "../src/business/UserBusiness";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDataBaseMock } from "./mocks/userDataBaseMock";

const userBusinessMock = new UserBusiness(
  new IdGeneratorMock(),
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new UserDataBaseMock() as any
)

describe("getUserById", () => {

  test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUserById("abc")
    } catch (error: any) {
      expect(error.message).toBe("User not found")
      expect(error.statusCode).toBe(404)

    }
  })
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)

    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )

      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error:any) {
      console.log(error.message)
    }
  })
})      
