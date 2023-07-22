#[no_mangle]
pub extern "C" fn add_int(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn scramble(x: u32) -> u32 {
    let bytes = x.to_be_bytes();
    (bytes[0] as u32)
        | ((bytes[1] as u32) << 8)
        | ((bytes[2] as u32) << 16)
        | ((bytes[3] as u32) << 24)
}
