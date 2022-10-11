<h1 align="center">
  Next.js Full Stack Ecommerce Application
 <br /><br />

 <img src="https://user-images.githubusercontent.com/85118308/195030324-fcfe1b9e-4159-470f-a580-bc80dd9eae49.png"  />
<br />
</h1>

## Technologies 🔧

- Next.js
- React
- Redux
- Material UI
- Firebase
- NextAuth
- Stripe
- TailwindCSS

## Demo
See (https://markus-davis-store.vercel.app/).

## Get started
Clone this repository:

    git clone https://github.com/MarkusDavis/markus-davis-store.git [YOUR_APP]
    cd [YOUR_APP]

Create a .env file. If using git, add it to your .gitignore file.
Values may differ for development and production:

```
# Authentication
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=key_goes_here
STRIPE_SECRET_KEY=key_goes_here

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=key_goes_here

HOST=http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google
```
## Install dependencies:

    yarn  # or npm install
    
## Setup

1. Go to https://console.firebase.google.com/ and create a new project, a new web app.
3. Go to **Authentication** > **Sign-in method** > **Add new provider**.
4. Enable **Google** and copy your **Web Client ID** and **Web Client Secret** to .env.local.
5. Create a new Stripe account.
6. Get Your API keys > Test API Keys
7. Get Publishable and Secret Key


Start it by doing the following:

    yarn dev

In production:

    yarn build
    yarn start
    
    
## Have fun 🙋‍♂️😊


## Stripe 
[Stripe CLI](https://stripe.com/docs/stripe-cli)

## Contributing

This is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and feature requests are all listed on the [issues] tab and labeled accordingly. Feel free to open bug tickets and make feature requests.
