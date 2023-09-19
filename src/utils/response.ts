class Response {
    static internalServerError(res: any, message  = 'An unknown error occurred while executing request', data = []) {
        return {status: false, message, data}
    }
    static sendError({message = '', data = null, status_code = 400}) {
        return {status: false, message, data, status_code}
    }
    static sendSuccess({message = '', data = null, status_code = 200}) {
        return {status: true, message, data, status_code}
    }
}

const response = ()  => {
    return new Response()
}

export default Response