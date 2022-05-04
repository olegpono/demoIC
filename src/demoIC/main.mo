import Cycles "mo:base/ExperimentalCycles";

actor {
  public query func cycleBalance() : async Nat{
    return Cycles.balance();
  };
};
