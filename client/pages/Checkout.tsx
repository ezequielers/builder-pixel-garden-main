import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CreditCard,
  MapPin,
  Home,
  Bath,
  Car,
  Ruler,
  Shield,
  Star,
  Lock,
} from "lucide-react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [installments, setInstallments] = useState("1");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Mock property data - in real app this would come from route params or context
  const property = {
    id: 1,
    title: "Apartamento Moderno no Centro",
    address: "Rua das Flores, 123 - Centro",
    city: "São Paulo, SP",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    garages: 1,
    area: 85,
    image: "/placeholder.svg",
  };

  // Tax calculations
  const monthlyRent = property.price;
  const guaranteeFee = monthlyRent * 0.8; // 80% do aluguel para garantia locatícia
  const platformFee = monthlyRent * 0.05; // 5% taxa da plataforma
  const ownerServiceFee = monthlyRent * 0.08; // 8% taxa de serviço para o proprietário
  const totalAmount =
    monthlyRent + guaranteeFee + platformFee + ownerServiceFee;

  const installmentOptions = [
    { value: "1", label: "À vista", discount: 0.05 },
    { value: "3", label: "3x sem juros", discount: 0 },
    { value: "6", label: "6x sem juros", discount: 0 },
    { value: "12", label: "12x com juros", interest: 0.02 },
  ];

  const getInstallmentAmount = () => {
    const option = installmentOptions.find((opt) => opt.value === installments);
    let amount = totalAmount;

    if (option?.discount) {
      amount = amount * (1 - option.discount);
    } else if (option?.interest) {
      amount = amount * (1 + option.interest);
    }

    return amount / parseInt(installments);
  };

  const getFinalTotal = () => {
    const option = installmentOptions.find((opt) => opt.value === installments);
    let amount = totalAmount;

    if (option?.discount) {
      amount = amount * (1 - option.discount);
    } else if (option?.interest) {
      amount = amount * (1 + option.interest);
    }

    return amount;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Finalizar Locação
            </h1>
            <p className="text-gray-600">
              Complete o processo para alugar este imóvel
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Property Summary */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Resumo do Imóvel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full sm:w-24 h-48 sm:h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 flex items-center gap-1 mb-3">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="break-words">{property.address}</span>
                      </p>
                      <div className="grid grid-cols-2 sm:flex sm:gap-4 gap-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          {property.bedrooms} quartos
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="h-4 w-4" />
                          {property.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          {property.garages}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ruler className="h-4 w-4" />
                          {property.area}m²
                        </span>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className="text-xl sm:text-2xl font-bold text-homeflip-purple">
                        R$ {monthlyRent.toLocaleString("pt-BR")}
                      </p>
                      <p className="text-sm text-gray-600">por mês</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card">Cartão de Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="debit-card" id="debit-card" />
                      <Label htmlFor="debit-card">Cartão de Débito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix">PIX</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bank-slip" id="bank-slip" />
                      <Label htmlFor="bank-slip">Boleto Bancário</Label>
                    </div>
                  </RadioGroup>

                  {(paymentMethod === "credit-card" ||
                    paymentMethod === "debit-card") && (
                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="card-number">Número do Cartão</Label>
                          <Input
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="card-name">Nome no Cartão</Label>
                          <Input id="card-name" placeholder="Nome completo" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Validade</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="000" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "credit-card" && (
                    <div className="mt-4">
                      <Label>Parcelamento</Label>
                      <RadioGroup
                        value={installments}
                        onValueChange={setInstallments}
                        className="mt-2"
                      >
                        {installmentOptions.map((option) => (
                          <div
                            key={option.value}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 p-3 border rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value={option.value}
                                id={option.value}
                              />
                              <Label htmlFor={option.value} className="flex-1">
                                {option.label}
                                {option.discount && (
                                  <span className="text-green-600 font-medium text-sm">
                                    {" "}
                                    (5% de desconto)
                                  </span>
                                )}
                                {option.interest && (
                                  <span className="text-orange-600 font-medium text-sm">
                                    {" "}
                                    (2% de juros)
                                  </span>
                                )}
                              </Label>
                            </div>
                            <span className="font-medium text-right sm:ml-auto">
                              R${" "}
                              {getInstallmentAmount().toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                              })}
                            </span>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Terms */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptedTerms}
                      onCheckedChange={(checked) =>
                        setAcceptedTerms(checked === true)
                      }
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      Aceito os{" "}
                      <a
                        href="#"
                        className="text-homeflip-purple hover:underline"
                      >
                        termos de uso
                      </a>{" "}
                      e{" "}
                      <a
                        href="#"
                        className="text-homeflip-purple hover:underline"
                      >
                        política de privacidade
                      </a>
                      . Estou ciente de que este processo dará início à análise
                      de crédito e documentação para locação do imóvel.
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo do Pagamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Aluguel mensal</span>
                      <span>R$ {monthlyRent.toLocaleString("pt-BR")}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Garantia Locatícia</span>
                      </div>
                      <span>R$ {guaranteeFee.toLocaleString("pt-BR")}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Taxa da Plataforma</span>
                      </div>
                      <span>R$ {platformFee.toLocaleString("pt-BR")}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Taxa de Serviço</span>
                      </div>
                      <span>R$ {ownerServiceFee.toLocaleString("pt-BR")}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>
                      R${" "}
                      {getFinalTotal().toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  {installments !== "1" && (
                    <div className="text-sm text-gray-600 text-center">
                      {installments}x de R${" "}
                      {getInstallmentAmount().toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  )}

                  {installments === "1" && (
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      5% de desconto aplicado
                    </Badge>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-900 mb-1">
                        Pagamento Seguro
                      </p>
                      <p className="text-blue-700">
                        Seus dados são protegidos com criptografia SSL e não
                        armazenamos informações de cartão de crédito.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full h-12 text-lg bg-homeflip-purple hover:bg-homeflip-purple/90"
                disabled={!acceptedTerms}
              >
                Finalizar Locação
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
