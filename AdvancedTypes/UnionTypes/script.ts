function padLeft(value: string, padding: string | number) {
    console.log(`type of padding ${typeof(padding)}`);
}

padLeft("hello", "world");
padLeft("hello", 123);
