interface GenericIdentityFn<T> {
  (arg: T): T;
}

// const identityFunction: GenericIdentityFn<any> = (arg) => arg;

function identityFunction<T>(arg :  GenericIdentityFn<T>) : GenericIdentityFn<T> {
    return arg;
}

interface GenericArray<T> {
  data: T[];
}
