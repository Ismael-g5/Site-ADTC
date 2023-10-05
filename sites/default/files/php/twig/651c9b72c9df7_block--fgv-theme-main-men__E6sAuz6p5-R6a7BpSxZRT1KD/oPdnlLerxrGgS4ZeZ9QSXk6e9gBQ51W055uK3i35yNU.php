<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/fgv_theme/templates/block/block--fgv-theme-main-menu.html.twig */
class __TwigTemplate_ff12183d1bfaeade85f8400f8bd93ca6 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "
<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" type=\"text/css\">
<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css\" type=\"text/css\">
<script src=\"https://code.jquery.com/jquery-3.6.1.slim.js\" integrity=\"sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=\" crossorigin=\"anonymous\"></script>

<style>
.menu.menu--main.nav.navbar-nav > .active.active-trail.first > a{
 padding: 6px 6px 6px 6px;
}
.menu.menu--main.nav.navbar-nav > .expanded-dropdown > a{
 padding: 6px 6px 6px 6px;
}
.menu.menu--main.nav.navbar-nav > .expanded-dropdown.last > a{
 padding: 6px 6px 6px 6px;
}
.menu.menu--main.nav.navbar-nav > li > a{
 padding: 6px 6px 6px 6px;
}
.navbar.navbar-expand-lg.navbar-light.bg-white.sticky-top{
  padding: 9px 18px 9px 18px;
  border: 0px 0px 0px 0px;
  margin-bottom: 0px;
}
.desktop-only.container-fluid{
  padding: 0px 15px 0px 15px;
}
body{
  overflow-x: hidden !important;
}
</style>


<nav class=\"navbar navbar-expand-lg navbar-light bg-white sticky-top d-none d-sm-block\">
  <div class=\"desktop-only container-fluid \">
    <button class=\"navbar-toggler navbar-toggler-right border-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar5\">
      <span class=\"navbar-toggler-icon\"></span>
    </button>
    <a class=\"collapse navbar-collapse\" id=\"navbar5\" href=\"";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 41, $this->source), "html", null, true);
        echo "\">
      <img class=\"d-block img-fluid\" src=\"";
        // line 42
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 42, $this->source) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 42, $this->source)), "html", null, true);
        echo "/images/logo-fgv.svg\" height=\"30px\" width=\"232px\">
    </a>
    ";
        // line 44
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 44, $this->source), "html", null, true);
        echo "
    <a class=\"btn navbar-btn ml-md-2 btn btn-yellow text-dark btn-warning\" target=\"_blank\" href=\"https://login-ptr.fgv.br/\">Área do Beneficiário</a>
    <div class=\"dropdown\">
      <button class=\"btn dropleft\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        <i class=\"fa-solid fa-magnifying-glass text-dark\"></i>
      </button>
      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">
        <div data-drupal-selector=\"search-block-form\" id=\"block-fgv-theme-search-form-wide\" role=\"search\">
          <form action=\"/search/node\" method=\"get\" id=\"search-block-form\" accept-charset=\"UTF-8\">
            <div class=\"form-item js-form-item form-type-search js-form-type-search form-item-keys js-form-item-keys form-no-label form-group\">
              <div class=\"input-group\">
                <input title=\"\" data-drupal-selector=\"edit-keys\" class=\"form-search form-control\" placeholder=\"Buscar por\" type=\"text\" id=\"edit-keys\" name=\"keys\" value=\"\" size=\"15\" maxlength=\"128\" data-toggle=\"tooltip\" data-original-title=\"Enter the terms you wish to search for.\">
                <div class=\"input-group-append\">
                  <button class=\"btn btn-outline-warning btn-lg\" type=\"submit\"><i class=\"fa-solid fa-magnifying-glass text-dark\"></i></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <button class=\"close-menu mobile-only\" data-toggle=\"collapse\" data-target=\"#navbar5\" > x </button>
  </div>
</nav>

<nav class=\"navbar px-0 pt-2 pb-0 mb-0 d-block d-sm-none sticky-top\">
  <div class=\"mobile-only menu-mobile d-flex px-2 py-0 align-items-center justify-content-between\">
    <a href=\"";
        // line 71
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 71, $this->source), "html", null, true);
        echo "\">
      <img class=\"d-block\" src=\"";
        // line 72
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 72, $this->source) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 72, $this->source)), "html", null, true);
        echo "/images/logo-fgv.svg\" width=\"160px\">
    </a>

    <div class=\"menu-outside\"> 
      <a class=\"btn navbar-btn btn-yellow text-dark btn-warning\" target=\"_blank\" href=\"https://login-ptr.fgv.br/\">Área do Beneficiário</a>
    </div>

    <div class=\"menu\" id=\"menu-body\">
      <div class=\"holder p-3\">
        <div style=\"height: 70%;display:flex;flex-flow:column\">
          ";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 82, $this->source), "html", null, true);
        echo "
        </div>
      </div>
      <div class=\"borda\">
        <button class=\"close-menu\" onclick=\"document.getElementById('menu-body').classList.toggle('open')\"> <i class=\"fa-regular fa-circle-xmark\"></i> </button>
      </div>
    </div>
  </div>

<div class=\"wrap px-2 mb-2 d-block d-sm-none\">
  <div class=\"d-flex justify-content-end\">
    <button class=\"navbar-toggler navbar-toggler-right border-0 border-right\" type=\"button\"  onclick=\"document.getElementById('menu-body').classList.toggle('open')\">
      <i class=\"fa-solid fa-bars text-dark\"></i>
    </button>
    <div class=\"dropdown\">
      <button class=\"btn dropleft\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa-solid fa-magnifying-glass text-dark\"></i></button>
      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">
        <div data-drupal-selector=\"search-block-form\" id=\"block-fgv-theme-search-form-wide\" role=\"search\">
          <form action=\"/search/node\" method=\"get\" id=\"search-block-form\" accept-charset=\"UTF-8\">
            <div class=\"form-item js-form-item form-type-search js-form-type-search form-item-keys js-form-item-keys form-no-label form-group\">
              <div class=\"input-group\">
                <input title=\"\" data-drupal-selector=\"edit-keys\" class=\"form-search form-control\" placeholder=\"Buscar por\" type=\"text\" id=\"edit-keys\" name=\"keys\" value=\"\" size=\"15\" maxlength=\"128\" data-toggle=\"tooltip\" data-original-title=\"Enter the terms you wish to search for.\">
                <div class=\"input-group-append\">
                  <button class=\"btn btn-outline-warning btn-lg\" type=\"submit\"><i class=\"fa-solid fa-magnifying-glass text-dark\"></i></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>  
</nav>



<script>
\$('.navbar > .mobile-only.menu-mobile > .menu > .holder > div ').prepend(\"<a href='";
        // line 120
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 120, $this->source), "html", null, true);
        echo "'><img class='d-block img-fluid my-2' src='";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 120, $this->source) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null), 120, $this->source)), "html", null, true);
        echo "/images/logo-branca-mobile.png' height='1.5rem'></a>\")
</script>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/fgv_theme/templates/block/block--fgv-theme-main-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  175 => 120,  134 => 82,  121 => 72,  117 => 71,  87 => 44,  82 => 42,  78 => 41,  39 => 4,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/fgv_theme/templates/block/block--fgv-theme-main-menu.html.twig", "/var/www/html/ADTC/themes/custom/fgv_theme/templates/block/block--fgv-theme-main-menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 41);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
