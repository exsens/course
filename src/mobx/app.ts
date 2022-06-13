import { makeAutoObservable, runInAction } from "mobx";
import auth from "./auth";
import profile from "./profile";

class App {
  initialized = false;
  constructor() {
    makeAutoObservable(this);
  }

  initializedApp = async () => {
    runInAction(() => {
      auth.getAuth();
      // .then(() => {
      //   const userId = auth.userId as number;
      //   profile.loadProfile(userId);
      //   profile.getStatus(userId);
      // });
      // Promise.all([
      //   auth.getAuth(),
      // ]);
    });

    this.initialized = true;
  };
}

export default new App();
