import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';

@Controller('token')
export class TokenController {
    @Get()
    async signIn(@Headers('Authorization') auth: string) {
        const args = auth && auth.split(' ');
        if (args && args.length == 2 && args[0] == 'Basic') {
            const credentiels = Buffer.from(args[1], 'base64').toString('utf-8').split(':');
            const email = credentiels[0];
            const password = credentiels[1];
            if (email && password) {
                // const user = await this.usersService.findOneByEmail(email);
                // if (user && await bcrypt.compare(password, user.hash)) {
                //     const payload = { sub: user.id, role: user.role };
                //     return { access_token: this.jwtService.sign(payload) };
                // }
                return;
            }
        }
        throw new UnauthorizedException();
    }
}
