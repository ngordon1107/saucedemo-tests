export default class Credentials {
    
    static validUserNames = {
            standard: "standard_user",
            locked_out: "locked_out_user",
            problem_user: "problem_user",
            performance_glitch: "performance_glitch_user",
            error_user: "error_user",
            visual: "visual_user",
        };

    static password = "secret_sauce"
    
    // helpers ----------------------
    static generateInvalidCredentials() {
        const timestamp = new Date().getTime();
        return {
            username: { value: `${timestamp}@example.com` },
            password: "mlvk20202=mkls"
        };
    }
    
    

}

